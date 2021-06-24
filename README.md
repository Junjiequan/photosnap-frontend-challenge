# Some usefull things.
- [react-burger-menu](https://www.npmjs.com/package/react-burger-menu)
- [react-responsive](https://www.npmjs.com/package/react-responsive)
- [hashRouter](https://reactrouter.com/web/api/HashRouter)
- [browserRouter](https://reactrouter.com/web/api/BrowserRouter)

for lazy people: mobileMenu + burger icon pre setting suite - Example

```
import { useMediaQuery } from 'react-responsive`
import { slide as Menu} from 'react-burger-menu';
const isMobile = useMediaQuery({maxWidth::"767px"})

function Header =()=>{
    if(isMobile)
        return 
        <Menu>
            <Nav />;
        </Menu>

        return <Nav />;
}
```
