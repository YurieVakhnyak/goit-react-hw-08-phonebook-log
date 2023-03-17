import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';
import { ContactInput } from 'components/ContactForm/ContactForm.styled';
import { FilterLabel } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const handleInput = filter => {
    dispatch(setFilterValue(filter.target.value));
  };

  return (
    <FilterLabel>
      Find contact by name:
      <ContactInput
        type="name"
        placeholder="Enter searching name..."
        name="filter"
        value={filterValue}
        onChange={handleInput}
      />
    </FilterLabel>
  );
};
