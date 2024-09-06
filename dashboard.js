document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const appointmentForm = document.getElementById('appointmentForm');
    const emergencyForm = document.getElementById('emergencyForm');
    
    
    window.showSection = function(sectionId) {
        sections.forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
    }

    
    const physicians = [
        { name: 'Dr. Smith', specialty: 'Cardiology', available: true },
        { name: 'Dr. Jones', specialty: 'Dermatology', available: true },
        { name: 'Dr. Sam', specialty: 'Neuroligy', available: false},
        { name: 'Dr. Fred', specialty: 'Gynacology', available: true},
        { name: 'Dr. James', specialty: 'General Practitioner', available: true},
        {}

    ];

const dtors = document.getElementById("availablePhysicians");
dtors.innerHTML = `${physicians.length}`;

    const physicianSelect = document.getElementById('physician');
    const physicianList = document.getElementById('physicianList');

    physicians.forEach(physician => {
        
        const option = document.createElement('option');
        option.textContent = physician.name;
        physicianSelect.appendChild(option);

      
        const li = document.createElement('li');
        li.textContent = `${physician.name} - ${physician.specialty}`;
        physicianList.appendChild(li);
    });

    
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const physician = physicianSelect.value;
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;

        document.getElementById('receiptPhysician').textContent = physician;
        document.getElementById('receiptDate').textContent = date;
        document.getElementById('receiptTime').textContent = time;
        document.getElementById('appointmentReceipt').classList.remove('hidden');
        appointmentForm.classList.add('hidden')
    });

    
    emergencyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const symptoms = document.getElementById('symptoms').value.trim().toLowerCase().split(/\s*,\s*/);
      
        let diagnosis;
        let prescription;
      
        
        if (symptoms.includes('fever') && symptoms.includes('cough')) {
          diagnosis = 'Flu';
          prescription = 'Paracetamol';

        }
        
        else if (symptoms.includes('headache') && symptoms.includes('fatigue')) {
          diagnosis = 'Migraine';
          prescription = 'Pain Relievers';
        }
        
        else if (symptoms.includes('bodyache')) {
          diagnosis = 'Muscle Strain';
          prescription = 'Muscle Relaxants';
        }
        
        else if (symptoms.includes('fever')) {
          diagnosis = 'Infection';
          prescription = 'Antibiotics';
        }
        
        else if (symptoms.includes('nausea') && symptoms.includes('dizziness')) {
          diagnosis = 'Food Poisoning';
          prescription = 'Rest and Hydration';
        }
        
        else if (symptoms.includes('shortness of breath') && symptoms.includes('cough')) {
          diagnosis = 'Asthma';
          prescription = 'Inhalers';
          
        }
        
        else {
          diagnosis = 'General Checkup';
          prescription = 'Consult Physician';
          document.getElementById("clse").classList.remove('hidden')
          document.getElementById("clse").classList.remove('hidden')
        }
      
        document.getElementById('diagnosis').textContent = diagnosis;
        document.getElementById('prescription').textContent = prescription;
        document.getElementById('emergencyResult').classList.remove('hidden');
        
      });

    
    showSection('dashboard');
});
document.getElementById("cloose")
.addEventListener("click", function(){
    document.getElementById("emergencyResult").classList.add("hidden");
    emergencyForm.classList.remove('hidden')
})

document.getElementById("get").addEventListener("click", function(){
  emergencyForm.classList.add("hidden")
})
