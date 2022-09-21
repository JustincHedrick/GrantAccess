const SORTING_KEYS = new Map();

SORTING_KEYS.set('postDate', {
  propertyName: 'PostDate',
  dropDownTitle: 'Post Date',
  isAscending: false,
  cleanValue: (date) => {
    return date ? Date.parse(date) : Infinity;
  }
});

SORTING_KEYS.set('closeDate', {
  propertyName: 'CloseDate',
  dropDownTitle: 'Close Date',
  isAscending: false,
  cleanValue: (date) => {
    return date ? Date.parse(date) : Infinity;
  }
});

SORTING_KEYS.set('titleA', {
  propertyName: 'OpportunityTitle',
  dropDownTitle: 'Grant Title',
  isAscending: false,
  cleanValue: (title) => {
    return title;
  }
});

export default SORTING_KEYS;