// import { ErrorMessage, Form, Formik } from 'formik';
// import * as Yup from 'yup';

import { Component } from 'react';

// export const SearchBar = ({ onSubmitSearch }) => {
//   return (
//     <Formik
//       initialValues={{
//         filter: '',
//       }}
//       onSubmit={(values, actions) => {
//         onSubmitSearch(values);
//         actions.resetForm({
//           values: {
//             filter: '',
//           },
//         });
//       }}
//     >
//       <Form>
//         <label htmlFor="filter">Search</label>
//         <input
//           type="text"
//           name="filter"
//           autoComplete="off"
//           placeholder="Search images and photos"
//         />
//         <ErrorMessage name="filter" component="div" />

//         <button type="submit">Search</button>
//       </Form>
//     </Formik>
//   );
// };

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleNameChange = e => {
    console.log(e.target.value);
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.reset();
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Search</button>

          <input
            value={searchValue}
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
