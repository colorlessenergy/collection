const FilterDecks = ({ filterValue, setFilterValue }) => {
    const handleInputChange = event => {
        setFilterValue(event.currentTarget.value);
    };

    return (
        <div className="t-center">
            <label className="d-none" htmlFor="filter-decks">
                filter decks
            </label>
            <input
                className="my-2"
                type="text"
                id="filter-decks"
                value={filterValue}
                onChange={handleInputChange}
                placeholder="giant..."
            />
        </div>
    );
};

export default FilterDecks;
