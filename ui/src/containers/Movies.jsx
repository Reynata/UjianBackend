import React from 'react'
import { Table, Button } from 'reactstrap';

const Movies = () => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Tahun</th>
                        <th>Deskripsi</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Hunter x Hunter</td>
                        <td>2011</td>
                        <td>Shounen anime</td>
                        <td>
                            <Button color="success" className="ml-5 mr-2">Edit</Button>
                            <Button color="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Your Name</td>
                        <td>2016</td>
                        <td>Slice of Life anime</td>
                        <td>
                            <Button color="success" className="ml-5 mr-2">Edit</Button>
                            <Button color="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="date"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <Button color="success" className="ml-5 mr-2">Add</Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

export default Movies;
