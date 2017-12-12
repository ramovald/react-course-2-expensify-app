/* import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'; */

import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('shoule return ExpenseListItem shapshot', () => {
   const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
   expect(wrapper).toMatchSnapshot();
});