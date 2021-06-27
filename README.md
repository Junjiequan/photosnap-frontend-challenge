# Some usefull things.

for lazy people: mobileMenu + burger icon pre setting suite - Example

```
import { useMediaQuery } from 'react-responsive`
import { slide as Menu} from 'react-burger-menu';


function Header =()=>{
const isMobile = useMediaQuery({maxWidth::"767px"})
    if(isMobile)
        return(
            <Menu>
                <Nav />;
            </Menu>
        )
        

        return(
             <Nav />
        );
}
```
