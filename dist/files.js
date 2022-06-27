const output = document.getElementById('output');
          if (window.FileList && window.File) {
            document.getElementById('file-selector').addEventListener('change', event => {
              output.innerHTML = '';
              for (const file of event.target.files) {
                const li = document.createElement('li');
                const name = file.name ? file.name : 'NOT SUPPORTED';
                const type = file.type ? file.type : 'NOT SUPPORTED';
                const size = file.size ? file.size : 'NOT SUPPORTED';
                li.textContent = `name: ${name}, type: ${type}, size: ${size}`;
                output.appendChild(li);
              }
            }); 
          }
