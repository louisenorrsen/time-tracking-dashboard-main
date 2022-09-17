const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

window.addEventListener('load', () => {
    fetchData('weekly')
})

daily.addEventListener('click', function () {
    weekly.style.color = "#bdc1ff"
    daily.style.color = "#fff"
    monthly.style.color = "#bdc1ff"
    fetchData('daily')
})

weekly.addEventListener('click', function () {
    weekly.style.color = "#fff"
    daily.style.color = "#bdc1ff"
    monthly.style.color = "#bdc1ff"
    fetchData('weekly')
})

monthly.addEventListener('click', function () {
    weekly.style.color = "#bdc1ff"
    daily.style.color = "#bdc1ff"
    monthly.style.color = "#fff"
    fetchData('monthly')
})

const fetchData = async (timeframe) => {
    const response = await fetch('./data.json')
    const data = await response.json()
    data.forEach((value) => {
        const current = value.timeframes[timeframe].current
        const previous = value.timeframes[timeframe].previous
        const title = value.title

        const header = document.getElementById(`${title.toLowerCase()}-header`)
        const currentHrs = document.getElementById(`current-${title.toLowerCase()}-hrs`)
        const previousHrs = document.getElementById(`previous-${title.toLowerCase()}-hrs`)

        header.textContent = title
        currentHrs.textContent = `${current}${current === 1 ? 'hr' : 'hrs'}`
        previousHrs.textContent = timeframe === 'daily' ? `Yesterday - ${previous}${previous === 1 ? 'hr' : 'hrs'}` : (timeframe === 'weekly' ? `Last Week - ${previous}${previous === 1 ? 'hr' : 'hrs'}` : `Last Month - ${previous}${previous === 1 ? 'hr' : 'hrs'}`)
    })
}
