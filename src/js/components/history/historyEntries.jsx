import React from 'react';

export default class HistoryEntries extends React.Component {
        render() {
            console.log('trying');
            return (
                <div className='card mb-3'>
                    <div id='history' className='card-header'>Search History</div>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='income-description'>Description</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='income-description'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='income-amount'>Amount</label>
                                <div className='input-group'>
                                    <span className='input-group-addon'>$</span>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='income-amount'
                                    />
                                </div>
                            </div>
                            <button
                                type='button'
                                className='btn btn-success col-12 mb-5'

                            >+ Add Income
              </button>
                            <table className='table table-sm table-hover'>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        
                                    </tr>
                                </thead>
                                
                            </table>
                        </form>
                    </div>
                </div>
            );

        }
    }

