# This script runs all collections hosted in this repository

Param(
  [Parameter( Mandatory = $true)]
  [ValidateSet("yes", "no")]
  $WriteLog,

  [Parameter( Mandatory = $true)]
  [ValidateSet("yes", "no")]
  $LocalEnvironment,

  [Parameter( Mandatory = $true)]
  [ValidateSet("yes", "no")]
  $Verbosity
)

$initialFolder = Get-Location
Write-Host "Initial Location: $initialFolder"

# Assignment #2
Set-Location .\Collections
$curLocation = Get-Location
Write-Host "Collections Location: $curLocation"

# Run Postman collection
& $curLocation/Assignment2.CollectionRunner.ps1 -WriteLog $WriteLog -LocalEnvironment $LocalEnvironment -Verbosity $Verbosity

# Restore initial folder
Set-Location $initialFolder
