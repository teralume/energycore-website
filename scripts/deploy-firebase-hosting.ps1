[CmdletBinding()]
param()

$ErrorActionPreference = 'Continue'

$projectId = 'university-energycorp'
$siteId = 'university-energycorp-landing'
$firebaseToolsVersion = '15.15.0'
$landingUrl = "https://$siteId.web.app"
$websiteRoot = Split-Path -Parent $PSScriptRoot

function Assert-NativeCommand {
    param([Parameter(Mandatory)][string]$Message)

    if ($LASTEXITCODE -ne 0) {
        throw $Message
    }
}

function Invoke-FirebaseCli {
    param([Parameter(Mandatory)][string[]]$Arguments)

    & npx --yes "firebase-tools@$firebaseToolsVersion" @Arguments
}

Set-Location -LiteralPath $websiteRoot

node --check script.js
Assert-NativeCommand 'La validación JavaScript de la Landing Page falló.'

$firebaseProjectsJson = (
    Invoke-FirebaseCli -Arguments @('projects:list', '--json', '--non-interactive')
) | Out-String
Assert-NativeCommand 'No se pudo consultar Firebase.'

$firebaseProjectsPayload = $firebaseProjectsJson | ConvertFrom-Json
$firebaseProject = @($firebaseProjectsPayload.result) |
    Where-Object { $_.projectId -eq $projectId } |
    Select-Object -First 1

if ($null -eq $firebaseProject) {
    Invoke-FirebaseCli -Arguments @('projects:addfirebase', $projectId, '--non-interactive')
    Assert-NativeCommand 'No se pudo habilitar Firebase en el proyecto GCP.'
}

$hostingSitesJson = (
    Invoke-FirebaseCli -Arguments @('hosting:sites:list', '--project', $projectId, '--json')
) | Out-String
Assert-NativeCommand 'No se pudo consultar los sitios de Firebase Hosting.'

$hostingSitesPayload = $hostingSitesJson | ConvertFrom-Json
$siteExists = $null -ne (
    @($hostingSitesPayload.result) |
    Where-Object { $_.site -eq $siteId -or $_.name -match "/sites/$siteId$" } |
    Select-Object -First 1
)

if (-not $siteExists) {
    Invoke-FirebaseCli -Arguments @('hosting:sites:create', $siteId, '--project', $projectId)
    Assert-NativeCommand "No se pudo crear el sitio $siteId."
}

Invoke-FirebaseCli -Arguments @('deploy', '--only', 'hosting', '--project', $projectId, '--non-interactive')
Assert-NativeCommand 'El despliegue de la Landing Page falló.'

$response = Invoke-WebRequest -Uri $landingUrl -UseBasicParsing -TimeoutSec 120 -ErrorAction Stop
if ($response.StatusCode -ne 200 -or $response.Content -notmatch 'EnergyCore') {
    throw 'La Landing Page publicada no superó la verificación de contenido.'
}

[PSCustomObject]@{
    ProjectId = $projectId
    SiteId = $siteId
    LandingUrl = $landingUrl
    Status = $response.StatusCode
    ContainsEnergyCore = $response.Content -match 'EnergyCore'
} | Format-List
