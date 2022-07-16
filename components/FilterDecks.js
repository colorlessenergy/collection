const FilterDecks = () => {
    return (
        <div className="t-center">
            <label className="d-none" htmlFor="filter-decks">
                filter decks
            </label>
            <input
                className="my-2"
                type="text"
                id="filter-decks"
                placeholder="giant..."
            />
        </div>
    );
};

export default FilterDecks;
