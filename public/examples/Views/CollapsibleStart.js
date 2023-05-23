function ExampleViewCollapsibleStart(){
    return (
<div className="position-relative">
        <Collapsible id="collapsibleStart" direction="start" autoClose={false} className="position-absolute start-0">
            <Collapsible.Title className='theme-primary'>Collapsible Start</Collapsible.Title>
            <Collapsible.Content className='theme-secondary' style={{width: '100px'}}>Content Here</Collapsible.Content>
        </Collapsible>
</div>
    )
}