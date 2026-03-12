import "../../css/components/AllPagesUsage/Header.css"

function Header(){
    return(
        <header style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center'
            }}>

            <div style={{
                fontWeight: 'bold'
            }}>
                Moonlight
            </div>
        </header>
    )
}

export default Header;