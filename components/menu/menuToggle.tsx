export const MenuToggle = ({ open }: { open: boolean }) => (
    <div className={`group burger-menu select-none ${open ? "open" : null}`} >
        <div className="bar1 rounded-full h-[0.2rem] lg:h-[0.25rem]  w-12 lg:w-16 menu-toggle-color group-hover:scale-[0.85] transition " key="b1" />
        <div className="bar2 rounded-full h-[0.2rem] lg:h-[0.25rem]  w-12 lg:w-16 menu-toggle-color group-hover:scale-[0.85] transition group-hover:delay-75" key="b2" />
        <div className="bar3 rounded-full h-[0.2rem] lg:h-[0.25rem]  w-12 lg:w-16 menu-toggle-color group-hover:scale-[0.85] transition group-hover:delay-100" key="b3" />
    </div>
);
