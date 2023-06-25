import React from 'react';
//import useTitle from "../../Components/Hooks";
const Blogs = () => {
    //useTitle('Blogs')
    return (
        <>
            <div className="md:p-24 p-10 space-y-24">
                <div>
                    <h1 className="text-4xl font-semibold mb-5">i. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>


                    <p>Access Token An access token is a credential used for authentication and authorization purposes in web and mobile applications.
                        A refresh token is a credential used to obtain a new access token without requiring the user to reauthenticate. It is typically issued alongside an access token during the authentication process.

                        <h1 className='text-lg font-bold mt-3' >How they do work and where should we store them in client-side</h1>
                        <h2 className='text-lg font-bold mt-3'>How they do work?</h2>
                        <ul>
                            <li>i. Authentication and Access Token Generation</li>
                            <li>ii. Accessing Protected Resources</li>
                            <li>iii. Token Expiration and Refreshing</li>
                            <li>iv. Reauthentication</li>
                        </ul>


                    </p>
                </div>



                <div>
                    <h1 className="font-semibold text-4xl mb-5">ii. Compare SQL and NoSQL databases?</h1>


                    <h1 className='text-lg font-bold'>Compare between sql and no sql</h1>
                    <div className="space-y-16">


                        <div >


                            <h2 className='text-lg font-bold mt-8'>Data Model:</h2>
                            <p> <span className='font-bold'>SQL: </span>
                                SQL databases follow a rigid, predefined schema structure based on tables, rows, and columns. They enforce data consistency and integrity through predefined relationships and constraints.
                            </p>

                            <p className='mt-3'> <span className='font-bold'>NoSQL: </span>
                                NoSQL databases offer flexible and dynamic data models. They can be document-based, key-value pairs, column-oriented, or graph-based, allowing for schema-less and unstructured data storage.
                            </p>
                        </div>









                        <div >
                            <h2 className='text-lg font-bold mt-3'>Query Language:</h2>



                            <p> <span className='font-bold'>SQL: </span>
                                SQL databases use SQL as the standard query language for performing operations such as data retrieval, manipulation, and management. SQL offers powerful declarative querying capabilities with standardized syntax.                      </p>


                            <p className='mt-3'> <span className='font-bold'>NoSQL: </span>
                                NoSQL databases often have their own query languages or APIs specific to their data models. These languages may be less standardized but offer flexibility for querying and working with the data model.                      </p>


                        </div>


                        <div>
                            <h2 className='text-lg font-bold mt-3'>Scalability:</h2>





                            <p> <span className='font-bold'>SQL: </span>
                                SQL databases are generally vertically scalable, meaning they can handle increased workload by upgrading hardware resources of a single server. Scaling horizontally across multiple servers can be complex.                      </p>



                            <p className='mt-3'> <span className='font-bold'>NoSQL: </span>
                                NoSQL databases are designed for horizontal scalability, allowing them to handle large-scale distributed systems efficiently. They can distribute data across multiple servers, enabling seamless scaling as demand grows.                      </p>



                        </div>


                        <div>


                            <h2 className='text-lg font-bold mt-3'>Schema Flexibility:</h2>
                            <p> <span className='font-bold'>SQL: </span>
                                SQL databases require a predefined schema, meaning the structure of the data must be defined in advance. Altering the schema can be time-consuming and may require migrating existing data.                      </p>


                            <p className='mt-3'> <span className='font-bold'>NoSQL: </span>
                                NoSQL databases offer schema flexibility, allowing for dynamic and evolving data structures. Changes to the data model can be made without downtime or complex migrations.                      </p>


                        </div>
                    </div>

                </div>




                <div>
                    <h1 className="font-semibold text-4xl mb-5">iii.  What is Nest JS?</h1>


                    <h1 className='text-lg font-bold'>express JS</h1>
                    <p>  Express js is a popular and widely used web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs.</p>


                    <h1 className='text-lg font-bold mt-4'>Next JS</h1>
                    <p>
                        Next js is a popular open-source framework for building server-rendered React applications. It is built on top of React and Node.js, providing a powerful environment for developing modern web applications with features like server-side rendering
                    </p>
                </div>





                <div>
                    <h1 className="font-semibold text-4xl mb-5"> iv.What is MongoDB aggregate and how does it work?</h1>


                    <p></p>  <h1 className='text-lg font-bold'>MongoDB aggregate</h1>
                    <p>MongoDB iss aggregate is a powerful feature that allows for advanced data processing and analysis in collections. It utilizes a pipeline of stages to perform operations like grouping, filtering, sorting, and aggregating data, providing flexible and efficient ways to derive insights from MongoDB data.</p>
                    <h1 className='text-lg font-bold mt-4'>How does is work?</h1>
                    <ul>
                        <li>i. Pipeline Approach</li>
                        <li>ii. Sequential Processing</li>
                        <li>iii. Document-level Operations</li>
                        <li>iv. Data Transformation and Aggregation</li>
                        <li>v. Efficient Processing</li>
                    </ul>
                </div>



            </div>




        </>



    );
};
export default Blogs;