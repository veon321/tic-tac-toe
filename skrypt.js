const fields = document.querySelectorAll('.field');
let isXTurn = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let pozostalyCzas = 10;
let doKonca = 120;

const stoperKoniec = document.getElementById('pozostaly');
const stoperWyswietlacz = document.getElementById('stoper');
const wynikKontener = document.getElementById('wynik-kontener');
const wynikTekst = document.getElementById('wynik-tekst');
const resetBtn = document.getElementById('reset-btn');

let odliczanie;

function aktualizujDoKonca() {
    stoperKoniec.textContent = `Pozostały czas do końca gry: ${doKonca}s`;
}

function aktualizujStoper() {
    stoperWyswietlacz.textContent = `Pozostały czas: ${pozostalyCzas}s (Tura: ${isXTurn ? "X" : "O"})`;
}

function uruchomStoper() {
    odliczanie = setInterval(() => {
        pozostalyCzas--;
        doKonca--;
        aktualizujStoper();
        aktualizujDoKonca();

        if (doKonca <= 0) {
            zakonczGre("Czas gry minął! Koniec meczu.");
            return;
        }

        if (pozostalyCzas <= 0) {
            pozostalyCzas = 10;
            isXTurn = !isXTurn;
            aktualizujStoper();
        }
    }, 1000);
}

function zakonczGre(komunikat) {
    clearInterval(odliczanie);
    stoperWyswietlacz.textContent = `Koniec gry!`;
    
    fields.forEach(pole => {
        pole.removeEventListener('click', handleButtonClick);
        pole.removeEventListener('mouseenter', handleMouseEnter);
        pole.removeEventListener('mouseleave', handleMouseLeave);
        
        const paragraph = pole.querySelector('.tic');
        if (paragraph.classList.contains('preview')) {
            paragraph.textContent = "";
            paragraph.classList.remove('preview');
        }
    });
    
    wynikTekst.textContent = komunikat;
    wynikKontener.style.display = "block";
}

function checkWin() {
    return winningCombinations.some(combination => {
        const text0 = fields[combination[0]].querySelector('.tic').textContent;
        const text1 = fields[combination[1]].querySelector('.tic').textContent;
        const text2 = fields[combination[2]].querySelector('.tic').textContent;

        if (text0 !== "" && text0 === text1 && text1 === text2) {
            return true;
        }
        return false;
    });
}

function checkDraw() {
    for (let i = 0; i < fields.length; i++) {
        const text = fields[i].querySelector('.tic').textContent;
        if (text === "" || fields[i].querySelector('.tic').classList.contains('preview')) {
            return false; 
        }
    }
    return true;
}

function handleMouseEnter(e) {
    const paragraph = e.currentTarget.querySelector('.tic');
    if (paragraph.textContent !== "" && !paragraph.classList.contains('preview')) {
        return;
    }
    paragraph.classList.add('preview');
    if (isXTurn) {
        paragraph.textContent = "X";
        paragraph.style.color = "red";
    } else {
        paragraph.textContent = "O";
        paragraph.style.color = "blue";
    }
}

function handleMouseLeave(e) {
    const paragraph = e.currentTarget.querySelector('.tic');
    if (paragraph.classList.contains('preview')) {
        paragraph.textContent = "";
        paragraph.classList.remove('preview');
    }
}

function handleButtonClick(e) {
    const clickedField = e.currentTarget; 
    const paragraph = clickedField.querySelector('.tic');
    
    if (paragraph.textContent !== "" && !paragraph.classList.contains('preview')) {
        return; 
    }
    
    paragraph.classList.remove('preview');

    if (isXTurn) {
        paragraph.textContent = "X";
        paragraph.style.color = "red";
    } else {
        paragraph.textContent = "O";
        paragraph.style.color = "blue";
    }

    if (checkWin()) {
        zakonczGre(`Gracz ${isXTurn ? "X" : "O"} wygrywa!`);
        return; 
    }

    if (checkDraw()) {
        zakonczGre("Remis! Wszystkie pola zajęte.");
        return;
    }

    isXTurn = !isXTurn;
    pozostalyCzas = 10;
    aktualizujStoper();
    handleMouseEnter(e);
}

function restartGry() {
    wynikKontener.style.display = "none";
    wynikTekst.textContent = "";
    
    isXTurn = true;
    pozostalyCzas = 10;
    doKonca = 120;
    
    fields.forEach(pole => {
        const paragraph = pole.querySelector('.tic');
        paragraph.textContent = "";
        paragraph.classList.remove('preview');
        pole.addEventListener('click', handleButtonClick);
        pole.addEventListener('mouseenter', handleMouseEnter);
        pole.addEventListener('mouseleave', handleMouseLeave);
    });
    
    aktualizujStoper();
    aktualizujDoKonca();
    uruchomStoper();
}

fields.forEach(pole => {
    pole.addEventListener('click', handleButtonClick);
    pole.addEventListener('mouseenter', handleMouseEnter);
    pole.addEventListener('mouseleave', handleMouseLeave);
});

resetBtn.addEventListener('click', restartGry);

aktualizujDoKonca();
aktualizujStoper();
uruchomStoper();