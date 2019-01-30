var ranges = [
    // Range names ...
  ];
  gapi.client.sheets.spreadsheets.values.get({
     spreadsheetId: 17FxDGhBZk0TYf61B5Jt1SxU4kmjpwmtxp5whvFbmXfs,
     range: range
  }).then((response) => {
    var result = response.result;
    var numRows = result.values ? result.values.length : 0;
    console.log(`${numRows} rows retrieved.`);
  });