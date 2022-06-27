const input = document.querySelector('input')
const reader = new FileReader();
const fileByteArray = [];

input.addEventListener('change', (e) => {
  reader.readAsArrayBuffer(e.target.files[0]);
  reader.onloadend = (evt) => {
    if (evt.target.readyState === FileReader.DONE) {
      const arrayBuffer = evt.target.result,
        array = new Uint8Array(arrayBuffer);
      for (const a of array) {
        fileByteArray.push(a);
      }
      console.log(fileByteArray)
    }
  }
})

var count, f, fname, fw, jpg, se, ss, x1, x2;
ss = "\u00ff\u00d8";
se = "\u00ff\u00d9";
count = 0;
while (true) {
    reader.open(fileByteArray, 'r');
    x1 = fileByteArray.find("\u00ff\u00d8");

    if (x1 < 0) {
    break;
    }

    x2 = fileByteArray.find("\u00ff\u00d9");
    jpg = fileByteArray.slice(x1, x2 + 1);
    count += 1;
}
