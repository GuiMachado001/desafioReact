import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface Client {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const generateClientPDF = (clients: Client[]) => {
  const doc = new jsPDF();

  doc.text("Relatório de Clientes", 14, 15);

  const tableColumn = ["Nome", "E-mail", "Telefone", "Endereço"];
  const tableRows: Array<Array<string | number>> = [];

  clients.forEach(client => {
    const clientData = [
      client.name,
      client.email,
      client.phone,
      client.address
    ];
    tableRows.push(clientData);
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
  });

  doc.save("clientes.pdf");
};