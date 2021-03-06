import React from 'react'
import { usePersistedState } from '../services/PersistenceService';
import { Typography, Card, CardContent, TextField } from '@material-ui/core'

export default function NeedsForm({ value, handleValueChange }) {
    const [food, setFood] = usePersistedState('food', 0);
    const handleFoodChange = (event) => {
        setFood(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
        handleValueChange(food + shelter + bills + debt + other)
    };
    const [shelter, setShelter] = usePersistedState('shelter', 0);
    const handleShelterChange = (event) => {
        setShelter(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
        handleValueChange(food + shelter + bills + debt + other)
    };
    const [bills, setBills] = usePersistedState('bills', 0);
    const handleBillsChange = (event) => {
        setBills(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
        handleValueChange(food + shelter + bills + debt + other)
    };
    const [debt, setDebt] = usePersistedState('debt', 0);
    const handleDebtChange = (event) => {
        setDebt(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
        handleValueChange(food + shelter + bills + debt + other)
    };
    const [other, setOther] = usePersistedState('other', 0);
    const handleOtherChange = (event) => {
        setOther(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
        handleValueChange(food + shelter + bills + debt + other)
    };
    return (
        <Card>
            <CardContent>
                <Typography id='nHeader' variant='h4'>
                    What are your basic needs?
                </Typography>
                <Typography id='np1' variant='body1'>
                    There are some common things that we all <b>need</b>.
                </Typography>
                <Typography id='np2' variant='body1'> 
                    There's food, shelter, insurance, and a bunch of other things.
                    We won't try to cover all of them, but will call out some of the bigger
                    categories and then provide a bucket to allow you to enter anything else.
                </Typography>
                <TextField fullWidth id='foodInput' label='Food Costs'
                    value={`$${food}`} onChange={handleFoodChange}
                    style={{marginTop: '8px'}}
                />
                <TextField fullWidth id='shelterInput' label='Housing Costs'
                    value={`$${shelter}`} onChange={handleShelterChange}
                    style={{marginTop: '8px'}}
                />
                <TextField fullWidth id='billsInput' label='Bills to Pay'
                    value={`$${bills}`} onChange={handleBillsChange}
                    style={{marginTop: '8px'}}
                />
                <TextField fullWidth id='debtInput' label='Debt Payoff Costs'
                    value={`$${debt}`} onChange={handleDebtChange}
                    style={{marginTop: '8px'}}
                />
                <TextField fullWidth id='otherInput' label='All Other Needs'
                    value={`$${other}`} onChange={handleOtherChange}
                    style={{marginTop: '8px'}}
                />
                <Typography id='nSum' variant='h6'
                    style={{marginTop: '20px'}}
                >
                    Total Needs
                </Typography>
                <TextField fullWidth id='needsInput' label='Needs Amount'
                    value={`$${Number(value).toFixed(0)}`} disabled={true}
                    style={{marginTop: '8px'}}
                />
            </CardContent>
        </Card>
    )
}
