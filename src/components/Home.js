import React from 'react';
import EmployeeList from './EmployeeList';
import Heading from './Heading';

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 leading-8 text-black font-bold tracking-wide uppercase">
          CRUD with React
        </h3>
        <Heading />
        <EmployeeList />
      </div>
    </React.Fragment>
  );
};

export default Home;
