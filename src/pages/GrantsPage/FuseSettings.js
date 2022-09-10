const searchOptions = {
  includeScore: true,
  isCaseSensitive: false,
  shouldSort: true,
  findAllMatches: true,
  keys: [
    {
      name: 'OpportunityTitle',
      weight: 2
    },
    {
      name: 'Description',
      weight: 1
    }
  ]
};

export default searchOptions;