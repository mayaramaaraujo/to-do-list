import * as TH from "./styles"
import check from '../../assets/check.svg'

function Header() {
    return <TH.Header data-testid={"header"}>
        <TH.Icon src={check} alt="checker" />
        <TH.Title>TASKLIST</TH.Title>
    </TH.Header>
}

export default Header;