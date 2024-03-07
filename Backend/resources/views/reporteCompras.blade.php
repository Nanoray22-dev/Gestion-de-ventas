<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            text-align: center;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #customers td,
        #customers th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #customers tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #customers tr:hover {
            background-color: #ddd;
        }

        #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
        }
    </style>
</head>

<body>
    <h1>Listado de Compras</h1>
    <table id="customers">
        <tr>
            <th>Fecha</th>
            <th>Nro. Venta / Factura</th>
            <th>Vendedor</th>
            <th>Cliente</th>
            <th>Est. Venta</th>
            <th>Est. Pago</th>
            <th>Total</th>
            <th>Pagado</th>
            <th>Saldo</th>
            <th>Método de Pago</th>
        </tr>
        @foreach ($reportes as $reporte)
        <tr>
            <td>{{ $reporte->fecha }}</td>
            <td>{{ $reporte->nro_venta }}</td>
            <td>{{ $reporte->vendedor }}</td>
            <td>{{ $reporte->cliente }}</td>
            <td>{{ $reporte->est_veta }}</td>
            <td>{{ $reporte->est_pago }}</td>
            <td>{{ $reporte->total }}</td>
            <td>{{ $reporte->pagado }}</td>
            <td>{{ $reporte->saldo }}</td>
            <td>{{ $reporte->met_pago }}</td>
        </tr>
        @endforeach
    </table>
</body>

</html>