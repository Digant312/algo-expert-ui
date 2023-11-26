import Badge from '@mui/material/Badge';

export const getDifficulty = (difficultyLevel) => {
    const difficulty = {
        1:'Easy',
        2:'Medium',
        3: 'Hard',
        4: 'Very Hard'
    }

    return <Badge badgeContent={difficulty[difficultyLevel]} color="secondary" />
}