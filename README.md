# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

 <div className="flex mt-8">
                        <div className="w-1/2 p-4">
                            {/* Konten Kolom 1 */}
                            <div className="bg-gray-200 p-4">
                                {/* <h2 className="text-lg font-bold">Column 1</h2> */}
                                <p>Isi kolom pertama di sini...</p>
                            </div>
                        </div>
                        <div className="w-1/2 p-4">
                            {/* Konten Kolom 2 */}
                            <div className=" p-4">
                                {/* <h2 className="text-lg font-bold ">Column 2</h2> */}
                                <p className='w-[400px] text-white' style={{ textJustify: 'inter-word', margin: '0 auto' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nesciunt similique? Adipisci distinctio, totam quod doloribus autem consequatur nesciunt ipsa beatae voluptates ducimus aperiam.</p>
                            </div>
                        </div>
                    </div>

<div className="w-[80%] mx-auto mt-12">
                <Typography variant="h4" color="white">
                    Description
                </Typography>
                <div className="w-[50%] text-start text-white mt-2">
                    {/* {description} */}Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum repudiandae temporibus. Velit architecto mollitia quaerat dignissimos dolor, fugiat ullam doloribus distinctio similique iusto.
                </div>
            </div>

<div className="mr-4" style={{ marginTop: '-250px' }}> {/* Margin kanan untuk memberikan jarak antara ikon dan teks */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-[20px] w-[20px] mr-2 mb-8 ml-2"
                        >
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clipRule="evenodd"
                            />
                            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                        </svg>
                    </div>
                    <div style={{ marginTop: '-250px' }}>
                        <Typography variant="h5" color="black">
                            Total Price
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Rp. 300.000 {/* Ganti dengan logika kalkulasi total */}
                        </Typography>
                    </div>
                    <Typography variant="h5" color="black">
                        Date
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                        12/12/2021 {/* Ganti dengan logika kalkulasi total */}
                    </Typography>
                </div>
