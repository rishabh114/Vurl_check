// Assuming a service to handle API calls with parameterized queries
import { SearchService } from './search.service';

// ...

  search() {
    this.searchService.search(this.searchQuery).subscribe();
  }
