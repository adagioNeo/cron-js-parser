Get-ChildItem -Recurse -File | ForEach-Object {
    $file = $_
    $hardLinks = (Get-Item -LiteralPath $file.FullName).GetFileSystemInfos() | Where-Object { $_.LinkType -eq 'HardLink' }
    if ($hardLinks.Count -gt 1) {
        [PSCustomObject]@{
            FilePath = $file.FullName
            HardLinks = $hardLinks | Select-Object -ExpandProperty FullName
        }
    }
}

