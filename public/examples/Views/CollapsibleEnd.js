function ExampleViewCollapsibleEnd(){
    return (
<div className="position-relative">
        <Collapsible id="collapsibleEnd" direction="end" autoClose={false} className="position-absolute end-0">
            <Collapsible.Title className='theme-primary' style={{height: '200px'}}>Collapsible End</Collapsible.Title>
            <Collapsible.Content className='theme-secondary' style={{width: '100px'}}>Content Here</Collapsible.Content>
        </Collapsible>
</div>
    )
}