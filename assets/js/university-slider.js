document.addEventListener('DOMContentLoaded', () => {
    const universities = [
        {
            name: '서울대학교',
            logo: 'assets/images/college/snu.png',
            alt: '서울대',
            number: 147
        },
        {
            name: '연세대학교',
            logo: 'assets/images/college/yonsei.png',
            alt: '연세대',
            number: 89
        },
        {
            name: '카이스트',
            logo: 'assets/images/college/kaist.svg.png',
            alt: '카이스트',
            number: 63
        },
        {
            name: '고려대학교',
            logo: 'assets/images/college/korea.svg.png',
            alt: '고려대',
            number: 72
        }
    ];

    const track = document.querySelector('.universities-track');
    if (!track) return;

    // Create the initial set of items
    const initialItems = [];
    const baseLoops = 5; // Create enough to be wider than any screen
    for (let i = 0; i < baseLoops; i++) {
        universities.forEach(uni => {
            const universityItem = document.createElement('div');
            universityItem.classList.add('university-item');
            universityItem.innerHTML = `
                <div class="university-logo">
                    <img src="${uni.logo}" alt="${uni.alt}" class="university-icon">
                </div>
                <div class="university-number">${uni.number}</div>
                <div class="university-name">${uni.name}</div>
            `;
            initialItems.push(universityItem);
        });
    }

    // Append the initial items
    initialItems.forEach(item => track.appendChild(item));

    // Clone the initial items and append them to create the seamless loop
    initialItems.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });
}); 