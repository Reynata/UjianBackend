import React from 'react'
import { Table, Button } from 'reactstrap';

const Categories = () => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Action</td>
                        <td>
                            <Button color="success" className="mr-2">Edit</Button>
                            <Button color="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Adventure</td>
                        <td>
                            <Button color="success" className="mr-2">Edit</Button>
                            <Button color="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Comedy</td>
                        <td>
                            <Button color="success" className="mr-2">Edit</Button>
                            <Button color="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Slice of Life</td>
                        <td>
                            <Button color="success" className="mr-2">Edit</Button>
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
                            <Button color="success" className="mr-2">Add</Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

export default Categories;
