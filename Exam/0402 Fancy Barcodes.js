function fancyBarcodes(input) {
    const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const patternDigits = /[0-9]/g;
  
    input.slice(1).forEach(barcode => {
      if (patternBarcode.test(barcode)) {
        const productGroup = (barcode.match(patternDigits) || ['0', '0']).join('');
        console.log(`Product group: ${productGroup}`);
      } else {
        console.log('Invalid barcode');
      }
    });
  }
  
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])