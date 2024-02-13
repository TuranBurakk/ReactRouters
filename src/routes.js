import BlogLayout from "./pages/blog"
import Blog from "./pages/blog/Blog"
import Home from "./pages/home/Home"
import Contact from "./pages/Contact"
import Categories from "./pages/blog/Categories"
import Post from "./pages/blog/Post"
import Profile from "./pages/Profile"
import PrivateRoute from "./components/PrivateRoute"
import HomeLayout from "./pages/home/HomeLayout"


const routes= [
        {
            path:'/',
            element: <HomeLayout/>,
            children:[
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path:'contact',
                    element: <Contact/>
                },
                {
                    path:'blog',
                    element: <BlogLayout/>,
                    children:[{
                        index:true,
                        element: <Blog/>
                    },
                    {
                        path:'categories',
                        element: <Categories/>
                    },
                    {
                        path:'post/:url',
                        element: <Post/>
                    }
                ]
                },
                {
                    path:'profile',
                    element: <PrivateRoute><Profile/></PrivateRoute>
                }
            ]
        }
        
        
]

export default routes