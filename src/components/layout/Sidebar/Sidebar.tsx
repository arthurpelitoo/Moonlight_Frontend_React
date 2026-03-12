import "../../css/components/AllPagesUsage/Sidebar.css";

function Sidebar(){
    return(
        <aside className="sidebar">
            <h2 className="sidebar-titulo">
                Categorias
            </h2>
            <ul className="sidebar-lista">
                <li className="sidebar-item">Impressões 3D</li>
                <li className="sidebar-item">Action Figures</li>
                <li className="sidebar-item">Decoração</li>
                <li className="sidebar-item">Peças sob medida</li>
            </ul>
        </aside>
    );
}

export default Sidebar;