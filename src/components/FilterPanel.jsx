import { Card } from '../UI/Card'
import { Stack } from '../UI/Stack'
import { Badge } from '../UI/Badge'

const FilterPanel = () => {

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    <Badge variant='clearable'>Frontend</Badge>
                    <Badge variant='clearable'>Backend</Badge>
                    <Badge variant='clearable'>Frontend</Badge>
                </Stack>

                <button
                    className='link'
                >Clear</button>
            </div>
        </Card>
    )
}

export default FilterPanel;