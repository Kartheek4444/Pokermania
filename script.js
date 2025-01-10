function changePage(page) {
    // Hide all pages first
    const pages = ['home', 'play', 'leaderboard'];
    pages.forEach(p => {
        const element = document.getElementById(`${p}-page`);
        if (element) {
            element.style.display = 'none';
        }
    });
    
    // Show the selected page
    const selectedPage = document.getElementById(`${page}-page`);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
    
    // If it's the home page, redirect to index.html
    if (page === 'home') {
        window.location.href = 'index.html';
    }
}

// Bot deployment handling
function handleBotSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const botName = form.querySelector('#botName').value;
    const botFile = form.querySelector('#botFile').files[0];
    const description = form.querySelector('#description').value;

    // Show deployment status
    const deploymentStatus = document.querySelector('.deployment-status');
    const statusMessage = document.querySelector('#statusMessage');
    const progressBar = document.querySelector('.progress');
    
    deploymentStatus.style.display = 'block';
    statusMessage.textContent = 'Uploading bot...';
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            statusMessage.textContent = 'Bot deployed successfully!';
            
            // Reset form after successful deployment
            setTimeout(() => {
                form.reset();
                deploymentStatus.style.display = 'none';
                progressBar.style.width = '0%';
            }, 2000);
        }
    }, 300);

    // In a real application, you would send the data to your server here
    console.log('Bot Details:', {
        name: botName,
        file: botFile,
        description: description
    });
}

// Leaderboard functionality
function populateLeaderboard(timeFilter = 'all-time') {
    const mockData = [
        {
            rank: 1,
            botName: 'AlphaPoker',
            owner: 'Player1',
            wins: 150,
            totalGames: 200,
            winRate: '75.0%',
            earnings: '$15,000'
        },
        {
            rank: 2,
            botName: 'PokerMaster',
            owner: 'Player2',
            wins: 140,
            totalGames: 190,
            winRate: '73.7%',
            earnings: '$13,500'
        },
        {
            rank: 3,
            botName: 'BluffKing',
            owner: 'Player3',
            wins: 130,
            totalGames: 180,
            winRate: '72.2%',
            earnings: '$12,000'
        }
    ];

    const leaderboardBody = document.getElementById('leaderboardBody');
    if (!leaderboardBody) return;

    leaderboardBody.innerHTML = '';
    mockData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.botName}</td>
            <td>${entry.owner}</td>
            <td>${entry.wins}</td>
            <td>${entry.totalGames}</td>
            <td>${entry.winRate}</td>
            <td>${entry.earnings}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Initialize leaderboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateLeaderboard();

    // Add event listener for time filter changes
    const timeFilter = document.getElementById('timeFilter');
    if (timeFilter) {
        timeFilter.addEventListener('change', (e) => {
            populateLeaderboard(e.target.value);
        });
    }
});

// File validation
document.getElementById('botFile')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && !file.name.endsWith('.py')) {
        alert('Please upload a Python (.py) file only');
        e.target.value = '';
    }
});