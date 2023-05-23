function ExampleViewCollapsibleTop(){
    return (
<div className="position-relative">
        <Collapsible id="collapsibleTop" direction="top" autoClose={false} className="position-absolute top-0">
            <Collapsible.Title className='theme-primary'>Collapsible Top</Collapsible.Title>
            <Collapsible.Content className='theme-secondary' height='100px'>Content Here</Collapsible.Content>
        </Collapsible>
</div>
    )
}