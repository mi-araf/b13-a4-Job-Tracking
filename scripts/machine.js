// togglebtns
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

// machine for jobs' btn
function showOnly (id) {
    const allJobs = document.getElementById('all-jobs');
    const interviewJobs = document.getElementById('interview-jobs');
    const rejectedJobs = document.getElementById('rejected-jobs');
    
    allJobs.classList.add('hidden');
    interviewJobs.classList.add('hidden');
    rejectedJobs.classList.add('hidden');
    
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
    
    // update small total jobs count
    if (typeof updateCount === 'function') {
        updateCount();
    }
}

// all-btn
function toggleBtn0() {
    allBtn.classList.remove('bg-white', 'text-gray-500');
    allBtn.classList.add('bg-[#1A77F2]', 'text-white');

    interviewBtn.classList.add('bg-white', 'text-gray-500');
    interviewBtn.classList.remove('bg-[#1A77F2]', 'text-white');
    
    rejectedBtn.classList.add('bg-white', 'text-gray-500');
    rejectedBtn.classList.remove('bg-[#1A77F2]', 'text-white');
}
// interview-btn
function toggleBtn1() {
    interviewBtn.classList.remove('bg-white', 'text-gray-500');
    interviewBtn.classList.add('bg-[#1A77F2]', 'text-white');
    
    rejectedBtn.classList.add('bg-white', 'text-gray-500');
    rejectedBtn.classList.remove('bg-[#1A77F2]', 'text-white');

    allBtn.classList.add('bg-white', 'text-gray-500');
    allBtn.classList.remove('bg-[#1A77F2]', 'text-white');
}
function toggleBtn2() {
    rejectedBtn.classList.remove('bg-white', 'text-gray-500');
    rejectedBtn.classList.add('bg-[#1A77F2]', 'text-white');
    
    interviewBtn.classList.add('bg-white', 'text-gray-500');
    interviewBtn.classList.remove('bg-[#1A77F2]', 'text-white');

    allBtn.classList.add('bg-white', 'text-gray-500');
    allBtn.classList.remove('bg-[#1A77F2]', 'text-white');
}
