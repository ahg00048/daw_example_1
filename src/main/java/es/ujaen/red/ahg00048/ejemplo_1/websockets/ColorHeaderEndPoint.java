package es.ujaen.red.ahg00048.ejemplo_1.websockets;

import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@ServerEndpoint("/color_header")
public class ColorHeaderEndPoint {
    private static String color = null;

    @OnOpen
    public void onOpen(Session session) {
        try {
            if (color != null) session.getBasicRemote().sendText(color);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @OnMessage
    public void onMessage(Session session, String msg) {
        try {
            color = msg;
            Logger.getGlobal().log(Level.INFO, "Color actual asignado: " + msg);

            for (Session sess : session.getOpenSessions()) {
                if (sess.getId().equals(session.getId())) continue;

                if (sess.isOpen()) {
                    sess.getBasicRemote().sendText(msg);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
