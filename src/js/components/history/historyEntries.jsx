import React from 'react';
function formatDate(date) {
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "June", "July",
        "Aug", "Sept", "Oct",
        "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function formatTime(time) {
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hour + ':' + minutes + ':' + seconds + ' ' + ampm;
}


export default class HistoryEntries extends React.Component {
    render() {
        const { history } = this.props;

        //const date = new Date();
        //const time = new Date();

        return (
            <div className='card'>
                <div id='history' className='card-header'>Search History</div>
                <div className='card-body'>
                    
                    <table>
                        <tbody>
                        {history.map((history, index) => (
                            <tr id='table' key={index}>
                                <td  defaultValue={name}>{history.name}</td>
                                <td   id='date'><small>{history.date.toString()}
                                    <br />
                                    </small></td>
                            </tr>

                        ))}
                        </tbody>
                        </table>
                    
                </div>
            </div>
        );

    }
}

