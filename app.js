
            const pw = document.getElementById('ent-pw');
            const bits = document.getElementById('ent-bits');
            const grade = document.getElementById('ent-grade');
            
            pw.addEventListener('input', () => {
                const val = pw.value;
                if(!val) {
                    bits.innerText = "0 Bits";
                    grade.innerText = "N/A";
                    return;
                }
                let pool = 0;
                if (/[a-z]/.test(val)) pool += 26;
                if (/[A-Z]/.test(val)) pool += 26;
                if (/[0-9]/.test(val)) pool += 10;
                if (/[^a-zA-Z0-9]/.test(val)) pool += 33;
                
                const entropy = Math.round(val.length * Math.log2(pool || 1));
                bits.innerText = `${entropy} Bits`;
                
                if (entropy < 40) grade.innerText = "Weak ❌";
                else if (entropy < 70) grade.innerText = "Medium ⚠️";
                else grade.innerText = "Strong 💪";
            });
        