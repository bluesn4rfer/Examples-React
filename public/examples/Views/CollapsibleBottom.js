function ExampleViewCollapsibleBottom(){
    return (
<div className="position-relative">
        <Collapsible id="collapsibleBottom" direction="bottom" autoClose={false}>
            <Collapsible.Title className='theme-primary'>Collapsible Bottom</Collapsible.Title>
            <Collapsible.Content className='theme-secondary' height='100px'>Content Here</Collapsible.Content>
        </Collapsible>
</div>
    )
}