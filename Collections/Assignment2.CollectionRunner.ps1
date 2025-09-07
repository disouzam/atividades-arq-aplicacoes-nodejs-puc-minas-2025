
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

if ($LocalEnvironment -eq "yes") {
  Write-Host "Using local environment"
  $envFile = "..\Environments\LocalEnvironment.postman_environment.json"
}
else {
  Write-Host "Using remote environment not implemented yet"
  exit
}

$collectionName = "Assignment2"
$collectionFileName = "$($collectionName).postman_collection.json"
Write-Host "Running collection: $($collectionFileName)..."

if ($WriteLog -eq "yes") {
  Write-Host "Results will be saved to $($collectionName).log..."

  if ($Verbosity -eq "yes") {
    Write-Host "Running with verbose logging..."
    newman run "$($collectionFileName)" --insecure -e "../Environments/$($envFile)" --verbose | Out-File -FilePath "$($collectionName).log" -Encoding oem
  }
  else {
    Write-Host "Running without verbose logging..."
    newman run "$($collectionFileName)" --insecure -e "../Environments/$($envFile)" | Out-File -FilePath "$($collectionName).log" -Encoding oem
  }
}
else {
    Write-Host "Results will be only displayed in console. No log file will be created..."

  if ($Verbosity -eq "yes") {
    Write-Host "Running with verbose logging..."
    newman run "$($collectionFileName)" --insecure -e "../Environments/$($envFile)" --verbose
  }
  else {
    Write-Host "Running without verbose logging..."
    newman run "$($collectionFileName)" --insecure -e "../Environments/$($envFile)"
  }
}
