package es.ujaen.red.ahg00048.ejemplo_1.servlets;

import java.io.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "Example_1", value = "/Example_1")
public class HelloServlet extends HttpServlet {

    public void init() { }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>no</h1>");
        out.println("</body></html>");
    }

    public void destroy() {
    }
}