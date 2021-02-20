//credit to https://github.com/deoxxa/paginator/blob/master/index.js

export class Paginator {
  perPage: number;
  length: number;

  constructor(perPage: number, length: number) {
    this.perPage = perPage || 25;
    this.length = length || 10;
  }

  build(totalResults: number, currentPage: number) {
    // We want the number of pages, rounded up to the nearest page.
    var totalPages = Math.ceil(totalResults / this.perPage);

    // Ensure both totalResults and current_page are treated as Numbers
    totalResults = parseInt(totalResults as any, 10);
    currentPage = parseInt(currentPage as any, 10) || 1;

    // Obviously we can't be on a negative or 0 page.
    if (currentPage < 1) {
      currentPage = 1;
    }
    // If the user has done something like /page/99999 we want to clamp that back
    // down.
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    // This is the first page to be displayed as a numbered link.
    var firstPage = Math.max(1, currentPage - Math.floor(this.length / 2));

    // And here's the last page to be displayed specifically.
    var lastPage = Math.min(totalPages, currentPage + Math.floor(this.length / 2));

    // This is triggered if we're at or near one of the extremes; we won't have
    // enough page links. We need to adjust our bounds accordingly.
    if (lastPage - firstPage + 1 < this.length) {
      if (currentPage < totalPages / 2) {
        lastPage = Math.min(totalPages, lastPage + (this.length - (lastPage - firstPage)));
      } else {
        firstPage = Math.max(1, firstPage - (this.length - (lastPage - firstPage)));
      }
    }

    // This can be triggered if the user wants an odd number of pages.
    if (lastPage - firstPage + 1 > this.length) {
      // We want to move towards whatever extreme we're closest to at the time.
      if (currentPage > totalPages / 2) {
        firstPage++;
      } else {
        lastPage--;
      }
    }

    // First result on the page. This, along with the field below, can be used to
    // do "showing x to y of z results" style things.
    var firstResult = this.perPage * (currentPage - 1);
    if (firstResult < 0) {
      firstResult = 0;
    }

    // Last result on the page.
    var lastResult = this.perPage * currentPage - 1;
    if (lastResult < 0) {
      lastResult = 0;
    }
    if (lastResult > Math.max(totalResults - 1, 0)) {
      lastResult = Math.max(totalResults - 1, 0);
    }

    // GIMME THAT OBJECT
    return {
      total_pages: totalPages,
      pages: Math.min(lastPage - firstPage + 1, totalPages),
      current_page: currentPage,
      first_page: firstPage,
      last_page: lastPage,
      previous_page: currentPage - 1,
      next_page: currentPage + 1,
      has_previous_page: currentPage > 1,
      has_next_page: currentPage < totalPages,
      total_results: totalResults,
      results: Math.min(lastResult - firstResult + 1, totalResults),
      first_result: firstResult,
      last_result: lastResult,
    };
  }
}
