/*global doctors */
import React from 'react';
import Fuse from 'fuse.js';
import Search from './components/Search';
import Doctor from './components/Doctor';
import Map from './components/Map';
import { debounce } from './utils/debounce';

const GOOGLE_MAPS_API = 'AIzaSyAm578LcomZ5PDIkSz8GCwGdI-2UJX1OmE';

const options = {
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'name',
    'location',
    'field',
    'zip',
  ]
};

const fuse = new Fuse(doctors, options);
const debouncedSearch = debounce((setFiltered, search) => setFiltered(fuse.search(search)), 400)

function App() {
  const [search, setSearch] = React.useState('');
  const [filtered, setFiltered] = React.useState(doctors);

  React.useEffect(() => {
    debouncedSearch(setFiltered, search);
  }, [search]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      { filtered.map((doctor) => (<Doctor key={doctor.slug} {...doctor} /> )) }
      <Map
        list={filtered}
        apiKey={GOOGLE_MAPS_API}
      />
    </>
  );
}

export default App;
