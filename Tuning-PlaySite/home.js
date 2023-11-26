var myFrame = document.getElementById('myFrame');
    // var nextButton = document.getElementById('nextButton');
    // var backButton = document.getElementById('backButton');
    var prevPage = document.getElementById('prevPage');
    var nextPage = document.getElementById('nextPage');
    
    var pages = [
      "src/page-1/index.html",
      "src/page-2/index.html",
      "src/page-3/index.html",
      "src/page-4/index.html",
      "src/page-5/index.html",
      "src/page-6/index.html",
    ];
    var pageIndex = 0;

    var pagination = document.getElementById('pagination');
    var pageNumbers = [];

    function createPageNumbers() {
      pages.forEach(function(page, index) {
        var pageNumber = document.createElement('span');
        pageNumber.classList.add('page-number');
        if (index === pageIndex) {
          pageNumber.classList.add('current-page');
        }
        pageNumber.textContent = index + 1;
        pageNumber.addEventListener('click', function() {
          pageIndex = index;
          myFrame.src = pages[pageIndex];
          updatePageButtons();
          updatePageNumbers();
        });
        pagination.appendChild(pageNumber);
        pageNumbers.push(pageNumber);
      });
    }

    function updatePageButtons() {
      if (pageIndex === 0) {
        prevPage.classList.add('hidden');
      } else {
        prevPage.classList.remove('hidden');
      }
      
      if (pageIndex === pages.length - 1) {
        nextPage.classList.add('hidden');
      } else {
        nextPage.classList.remove('hidden');
      }
    }

    function updatePageNumbers() {
      pageNumbers.forEach(function(pageNumber, index) {
        if (index === pageIndex) {
          pageNumber.classList.add('current-page');
        } else {
          pageNumber.classList.remove('current-page');
        }
      });
    }

    prevPage.addEventListener('click', function() {
      pageIndex = Math.max(0, pageIndex - 1);
      myFrame.src = pages[pageIndex];
      updatePageButtons();
      updatePageNumbers();
    });

    nextPage.addEventListener('click', function() {
      pageIndex = Math.min(pages.length - 1, pageIndex + 1);
      myFrame.src = pages[pageIndex];
      updatePageButtons();
      updatePageNumbers();
    });

    createPageNumbers(); 