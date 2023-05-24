function ExampleViewCollapsibles(){
    return (
        <div className="position-relative">
            <Collapsible id="collapsibleTop" direction="top" autoClose={false} className="position-absolute top-0 w-50">
                <Collapsible.Title className='theme-primary'>Collapsible Top</Collapsible.Title>
                <Collapsible.Content className='theme-secondary' height='100px'>Content Here</Collapsible.Content>
            </Collapsible>
            <Collapsible id="collapsibleBottom" direction="bottom" autoClose={false} className="position-absolute bottom-0 w-50">
                <Collapsible.Title className='theme-primary'>Collapsible Bottom</Collapsible.Title>
                <Collapsible.Content className='theme-secondary' height='100px'>Content Here</Collapsible.Content>
            </Collapsible>
            <Collapsible id="collapsibleStart" direction="start" autoClose={false} className="position-absolute start-0 h-50">
                <Collapsible.Title className='theme-primary'>Collapsible Start</Collapsible.Title>
                <Collapsible.Content className='theme-secondary' style={{width: '100px'}}>Content Here</Collapsible.Content>
            </Collapsible>
            <Collapsible id="collapsibleEnd" direction="end" autoClose={false} className="position-absolute end-0 h-50">
                <Collapsible.Title className='theme-primary' style={{height: '200px'}}>Collapsible End</Collapsible.Title>
                <Collapsible.Content className='theme-secondary' style={{width: '100px'}}>Content Here</Collapsible.Content>
            </Collapsible>
        </div>
    )
}